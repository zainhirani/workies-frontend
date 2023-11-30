export namespace Products {
  export type Items = {
    _id: string;
    title: string;
    price: number;
    category: {
      _id: string;
      name: string;
      slug: string;
    };
    description: string;
    createdBy: {
      role: string;
      _id: string;
      name: string;
    };
    image: string;
  };

  // Fetch
  export type ListingProps = {};
  export type ListingResponse = {
    data: Items[];
  };
  export interface ListingAPIPayload extends ListingProps {}

  // Detail
  export type DetailProps = {
    slug: string | undefined;
    // [slug: string]: string | string[] | undefined;
  };
  export type DetailResponse = {
    data: Items;
  };
  export interface DetailAPIPayload extends DetailProps {}

  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    data: Items;
  };
  export type CreateMutationPayload = {
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }

  // Remove
  export type RemoveProps = {};
  export type RemoveResponse = {
    data: Items;
  };
  export type RemoveMutationPayload = {
    slug: string;
  };
  export interface RemoveAPIPayload extends RemoveMutationPayload {}

  //Update
  export type UpdateProps = {
    slug?: string;
  };
  export type UpdateResponse = {
    data: Items;
  };
  export type UpdateMutationPayload = {
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
  };
  export interface UpdateAPIPayload extends UpdateProps {
    data: UpdateMutationPayload;
  }
}
