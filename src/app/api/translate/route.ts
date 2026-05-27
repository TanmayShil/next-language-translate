import { NextRequest, NextResponse } from "next/server";
import translate from "google-translate-api-x";
import { RequestBody, TranslationResponse } from "@/@type/product";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<TranslationResponse>> {
  let body: RequestBody | null = null;

  try {
    body = await req.json();

    const result = await translate(body?.text || "", {
      to: body?.target || "",
    });

    return NextResponse.json<TranslationResponse>({
      translatedText: result.text,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json<TranslationResponse>(
      {
        translatedText: body?.text || "",
      },
      {
        status: 500,
      },
    );
  }
}