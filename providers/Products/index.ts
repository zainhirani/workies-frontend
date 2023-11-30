import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Products } from "./types";

const KEY = "Products";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}
export function getStatsProviderKey(
  arg0: { productId: number | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}
export function getFormProviderKey(
  arg0: { id: string | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}

// Fetch
export function useProductsListing(
  props: Products.ListingProps = {},
): UseQueryResult<Products.ListingResponse> {
  return useQuery(
    getKeyFromProps(props, "LISTING"),
    () => api.fetch(props),
    {},
  );
}

// Detail
export function useProductsDetail(
  props: Products.DetailProps,
): UseQueryResult<Products.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}

//Create
export function useProductsCreate(
  props: Products.CreateProps = {},
): UseMutationResult<
  Products.CreateResponse,
  {
    message?: string;
  },
  Products.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.create({ ...props, data: payload }), {
    mutationKey: `${KEY}|Create`,
    onSuccess: () => {
      queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
    },
    retry: 0,
  });
}

// Remove
export function useProductsRemove(
  props: Products.RemoveProps = {},
): UseMutationResult<
  Products.RemoveResponse,
  {
    message?: string;
  },
  Products.RemoveMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.remove(payload), {
    mutationKey: `${KEY}|Remove`,
    onSuccess: () => {
      queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
    },
    retry: 0,
  });
}

// Update
export function useProductsUpdate(
  props: Products.UpdateProps,
): UseMutationResult<
  Products.UpdateResponse,
  {
    message?: string;
  },
  Products.UpdateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.update({ ...props, data: payload }), {
    mutationKey: `${KEY}|Update`,

    onSuccess: () => {
      queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
    },

    retry: 0,
  });
}
