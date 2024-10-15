import { NextRequest, NextResponse } from "next/server";
import { prisma } from "app/_lib/prisma";

export async function GET(req: NextRequest, productCUID: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        productCUID,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
