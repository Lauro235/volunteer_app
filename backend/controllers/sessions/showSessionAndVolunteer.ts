import { Pool, QueryResult } from "pg";

export interface IResponse {
  session_date: string;
  session_slot: string;
  first_name: string;
  surname: string;
}

export const showSessionAndVolunteer = async (
  poolSession: Pool,
  date: string,
  slot: string
): Promise<QueryResult<IResponse> | undefined> => {
  return poolSession
    .query(
      `
      SELECT TO_CHAR(s.session_date, 'YYYY-MM-DD') as session_date, s.session_slot,
      v.first_name, v.surname
      FROM sessions AS s
      INNER JOIN volunteers AS v
      ON s.volunteer_id = v.id
      WHERE s.session_date = $1
      AND s.session_slot = $2`,
      [date, slot]
    )
    .then((data) => {
      return data.rows[0];
    }).catch((error) => {
      console.log(error)
      return error
    })
};
