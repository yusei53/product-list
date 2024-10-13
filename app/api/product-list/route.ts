import { NextRequest, NextResponse } from "next/server";
import { prisma } from "app/_lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const productList = await prisma.product.findMany();
    return NextResponse.json({ productList });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
