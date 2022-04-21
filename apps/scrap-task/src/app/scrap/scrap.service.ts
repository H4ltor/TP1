import {Injectable, Logger} from '@nestjs/common';
import {Cron, Timeout} from "@nestjs/schedule";
import axios from "axios";
import {parse} from "node-html-parser";


@Injectable()
export class ScrapService {
  protected logger = new Logger(ScrapService.name);



  @Cron('*/5 * * * * *')
  //@Cron('30 3 * * 1,3,5')
   Scrap(): Promise<any> {
    //this.logger.log('Cron job match');
    return axios.get('https://www.matchendirect.fr/europe/ligue-des-champions-uefa/2022-15/')
      .then(response => response.data)
      .then(htmlStr => parse(htmlStr))
      .then(rootDocument => [...rootDocument.querySelectorAll('[data-matchid]')].map(matchElement => ({
        homeTeamName: matchElement.querySelector('.lm3_eq1').innerText,
        awayTeamName: matchElement.querySelector('.lm3_eq2').innerText,
        homeTeamScore: matchElement.querySelector('.lm3_score').innerText.split('-')[0],
        awayTeamScore: matchElement.querySelector('.lm3_score').innerText.split('-')[1],
      }) ))
      //.then(matches => this.logger.log(matches));
      //.then(matches => JSON.stringify(matches))
      .then(matches => axios.post(`localhost:3333/api/matches/`, matches))
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
      //.then(matchesStr => this.logger.log(matchesStr));


  }

