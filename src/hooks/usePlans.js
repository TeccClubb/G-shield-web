import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import {
  GET_PLANS_ROUTE,
  GET_PURCHASE_ACTIVE_PLAN_ROUTE,
  GET_PURCHASE_PLAN_ROUTE,
} from "@/lib/constants";
import { setActivePlan, setPlans } from "@/store/plans.slice";
import { useNotifications } from "@toolpad/core/useNotifications";
import { useUserCookie } from "./use-cookies";

export const usePlansState = () => useSelector((state) => state.plans);

export const usePlans = () => {
  const dispatch = useDispatch();
  const notify = useNotifications();

  const { plans, isPlansLoadedOnce } = useSelector((state) => state.plans);

  const [isPlansLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        if (isPlansLoadedOnce) return;
        const response = await axios
          .get(GET_PLANS_ROUTE)
          .then((res) => res.data);
        if (response.status) {
          dispatch(setPlans(response.plans));
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Plans Load";
        notify.show(errorMessage, {
          severity: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return { isPlansLoading, plans };
};

export const useActivePlan = () => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();
  const { activePlan, isActivePlanLoadedOnce } = useSelector(
    (state) => state.plans
  );

  const [isActivePlanLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivePlan = async () => {
      try {
        if (isActivePlanLoadedOnce) return;
        const response = await axios
          .get(GET_PURCHASE_ACTIVE_PLAN_ROUTE, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          })
          .then((res) => res.data);
        if (response.status) {
          dispatch(setActivePlan(response.plan));
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Active Plan";
        notify.show(errorMessage, {
          severity: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchActivePlan();
  }, []);

  return { isActivePlanLoading, activePlan };
};

export const usePurchasedPlan = (purchaseId, token) => {
  const { user } = useUserCookie();
  const [purchasedPlan, setPurchasedPlan] = useState();
  const [isPurchasedPlanLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedPlan = async () => {
      try {
        const response = await axios
          .get(GET_PURCHASE_PLAN_ROUTE(purchaseId), {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token ? token : user.access_token}`,
            },
          })
          .then((res) => res.data);
        if (response.status) {
          console.log(response.purchase);
          setPurchasedPlan(response.purchase);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Active Plan";
        notify.show(errorMessage, {
          severity: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedPlan();
  }, []);

  return { isPurchasedPlanLoading, purchasedPlan };
};
