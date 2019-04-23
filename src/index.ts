import axios, { AxiosInstance } from 'axios';

import { Response } from './types';

export enum AcceptedCountTypes {
  Normal = 'Normal',
  Shortest = 'Shortest',
  Fastest = 'Fastest',
  First = 'First'
}

export class AtCoderAPI {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://kenkoooo.com/atcoder'
    });
  }

  // TODO: add query string
  private async callGet<T>(path: string): Promise<T> {
    const res = await this.axiosInstance.get<T>(path);
    return res.data;
  }

  public contests(): Promise<Response.Contests> {
    return this.callGet('/resources/contests.json');
  }
  public problems(): Promise<Response.Problems> {
    return this.callGet('/resources/problems.json');
  }
  public mergedProblems(): Promise<Response.MergedProblems> {
    return this.callGet('/resources/merged-problems.json');
  }

  public acceptedCounts(type: AcceptedCountTypes): Promise<Response.AcceptedCounts> {
    switch (type) {
      case AcceptedCountTypes.Normal:
        return this.callGet('/resources/ac.json');
      case AcceptedCountTypes.Shortest:
        return this.callGet('/resources/short.json');
      case AcceptedCountTypes.Fastest:
        return this.callGet('/resources/fast.json');
      case AcceptedCountTypes.First:
        return this.callGet('/resources/first.json');
    }
  }

  public ratedPointSums(): Promise<Response.RatedPointSums> {
    return this.callGet('/resources/sums.json');
  }
}

async function main() {
  // const client = new AtCoderAPI()
  // console.log((await client.mergedProblems())[0])
}

main();
