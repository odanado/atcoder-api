export declare namespace Response {
  export interface Contest {
    id: string;
    start_epoch_second: number;
    duration_second: number;
    title: string;
    rate_change: string;
  }
  export type Contests = Contest[];

  export interface Problem {
    id: string;
    contest_id: string;
    title: string;
  }
  export type Problems = Problem[];

  export interface MergedProblem {
    id: string;
    contest_id: string;
    title: string;
    shortest_submission_id: number;
    shortest_problem_id: string;
    shortest_contest_id: string;
    shortest_user_id: string;
    fastest_submission_id: number;
    fastest_problem_id: string;
    fastest_contest_id: string;
    fastest_user_id: string;
    first_submission_id: number;
    first_problem_id: string;
    first_contest_id: string;
    first_user_id: string;
    source_code_length: number;
    execution_time: number;
    point: number;
    predict?: number;
    solver_count: number;
  }
  export type MergedProblems = MergedProblem[];
}
