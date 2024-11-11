import { NextRequest, NextResponse } from "next/server";
import { prisma } from "src/app/_lib/prisma";

// TODO: productCUIDをIDを除いたカラムたちをGETするようにしたい
export async function GET(
  req: NextRequest,
  { params }: { params: { productCUID: string } }
) {
  try {
    const { productCUID } = params;
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
