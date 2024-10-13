import { NextRequest, NextResponse } from "next/server";
import { prisma } from "app/_lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, description, developer, image } = await req.json();

    const product = await prisma.product.create({
      data: {
        name,
        description,
        developer,
        image,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "作成中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
