import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "src/app/_lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const {
      title,
      subtitle,
      description,
      skills,
      developer,
      developType,
      productURL,
      image,
    } = await req.json();

    const product = await prisma.product.create({
      data: {
        title,
        subtitle,
        description,
        skills,
        developer,
        developType,
        productURL,
        image,
      },
    });

    revalidateTag("product-list");

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "作成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
