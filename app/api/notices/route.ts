export async function GET() {

  const notices = [
    {
      id:1,
      title:"테스트 공지"
    }
  ]

  return Response.json(notices)

}