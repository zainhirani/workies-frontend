import service from "services";
import { Products } from "./types";

// Fetch
export async function fetch(
  props: Products.ListingAPIPayload,
): Promise<Products.ListingResponse> {
  return service({
    method: "GET",
    url: `/products`,
  });
}

// Detail
export async function detail(
  props: Products.DetailAPIPayload,
): Promise<Products.DetailResponse> {
  return service({
    method: "GET",
    url: `/products/${props.slug}`,
  });
}

// Create
export async function create(
  props: Products.CreateAPIPayload,
): Promise<Products.CreateResponse> {
  return service({
    method: "POST",
    url: `/products`,
    body: props.data,
  });
}

// Remove
export async function remove(
  props: Products.RemoveAPIPayload,
): Promise<Products.RemoveResponse> {
  return service({
    method: "DELETE",
    url: `/products/${props.slug}`,
  });
}

// Update
export async function update(
  props: Products.UpdateAPIPayload,
): Promise<Products.UpdateResponse> {
  return service({
    method: "PUT",
    url: `/products/${props.slug}`,
    body: props.data,
  });
}
