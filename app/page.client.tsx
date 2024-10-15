"use client";
import { useClient } from "app/_utils";
import { useRouteStyles } from "./_theme";
import ProductCardList from "./_features/product/list/components/ProductCardList";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { Product } from "./_features/product/detail/endpoint";

type TProps = {
  productList: Product[];
};

const Home: FC<TProps> = ({ productList }) => {
  const router = useRouter();
  useRouteStyles();

  useEffect(() => {
    router.refresh();
  }, [router]);

  const isClient = useClient();
  // const productList = getProductList();
  // const { data: productList, isLoading } = useProductList();
  // if (!productList) return undefined;
  // if (isLoading) return <p>Loading...</p>;

  // TODO: ここでproductをGETするAPIを叩く
  return (
    isClient && (
      <>
        {/* <TopSlider products={products} /> */}
        <ProductCardList productList={productList} />
      </>
    )
  );
};

export default Home;
// import React, { useEffect, useState } from "react";
// import { supabase } from "./_lib/supabase";

// const ImageGallery = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const bucketName = "product-image-buckets";
//   const folderPath = "thumbnail";

//   useEffect(() => {
//     const fetchImages = async () => {
//       // バケット内のファイルリストを取得
//       const { data: fileList, error } = await supabase.storage
//         .from(bucketName)
//         .list(folderPath, {
//           limit: 100,
//           offset: 0,
//           sortBy: { column: "name", order: "asc" },
//         });

//       if (error) {
//         console.error("Error fetching file list:", error);
//         return;
//       }

//       if (fileList) {
//         // 各ファイルのパブリックURLを取得
//         const imageUrls = fileList.map((file) => {
//           const { data } = supabase.storage
//             .from(bucketName)
//             .getPublicUrl(`${folderPath}/${file.name}`);
//           return data.publicUrl;
//         });

//         setImages(imageUrls);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {images.length > 0 ? (
//           images.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`image-${index}`}
//               style={{ width: "200px", height: "auto", margin: "10px" }}
//             />
//           ))
//         ) : (
//           <p>Loading images...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
