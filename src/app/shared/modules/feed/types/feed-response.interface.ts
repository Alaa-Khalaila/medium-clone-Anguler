import { Article } from "src/app/shared/types/article.interface";

export interface GetFeedResponse {
    articles:Article[],
    articlesCount:number
}