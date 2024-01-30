import RouteLayout from "@/components/routeLayout/routeLayout";

import { Client, Environment, ApiError } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_UP_KEY,
  environment: Environment.Production,
});

const getProducts = async () => {
  try {
    const response = await client.catalogApi.listCatalog();

    return response.result.objects;
  } catch (error) {
    console.log(error);
  }
};

export default async function Shop() {
  const products = await getProducts();

  return (
    <div className="shop-wrapper">
      <RouteLayout
        route="shop"
        title="Welcome To The S.T.O.P. Shop!"
        comment="The Most Environmental And Sustainable Products We Could Find From Around The World."
      >
        <ul>
          {products?.map((product: any) => {
            return (
              <li key={product.id}>
                <h3>{product.itemData?.name ? product.itemData.name : ""}</h3>
                <p>
                  {product.itemData?.description
                    ? product.itemData.description
                    : ""}
                </p>
                <hr />
              </li>
            );
          })}
        </ul>
      </RouteLayout>
    </div>
  );
}
