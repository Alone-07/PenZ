import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = "https://7jdu17fqte.execute-api.us-east-1.amazonaws.com/v1/penz";
  private AUTH_TOKEN = "rvb5F20Egl1DuElc0BIz93xCoBRfJeTC3ERJdf6V";
  private userId = "vania@sciera.com";
  private header =  {
    'x-api-key': this.AUTH_TOKEN,
    'Content-Type': 'application/json',
  };
  private getBody =  {
    "reportType": "get_penz_question_meta",
    "userId":  this.userId,
  };
  private httpOptions =  {
    headers: new HttpHeaders(
       this.header,
    ),
  }
  constructor(private http: HttpClient) { 
  }

  public getCaterogyQuestions() {
      return this.http.post(`${this.API_URL}`, this.getBody, this.httpOptions).toPromise().catch(err => console.error(err));;
  }
}
