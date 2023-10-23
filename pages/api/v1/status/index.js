import database from "../../../../infra/database"

async function status(request, response) {
  const result = await database.query("SELECT 1+1 AS result");
  console.log(result.rows[0].result);
  response.status(200).json({ chave: "valor" });
}

export default status;
