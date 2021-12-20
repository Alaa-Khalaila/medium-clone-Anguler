import { GetFeedResponse } from "./feed-response.interface";

export interface FeedState {
    isLoading:boolean,
    data:GetFeedResponse | null,
    errors:string | null
}