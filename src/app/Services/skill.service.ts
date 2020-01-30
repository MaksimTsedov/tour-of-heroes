import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from '../Classes/skill';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillsUrl = 'api/skills';
  constructor(
    private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillsUrl);
  }

  getSkill(id: number): Observable<Skill> {
    const url = `${this.skillsUrl}/${id}`;
    return this.httpClient.get<Skill>(url);
  }

  updateSkill(skill: Skill): Observable<any> {
    return this.httpClient.put(this.skillsUrl, skill, this.httpOptions);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post(this.skillsUrl, skill, this.httpOptions).pipe(
      tap((newSkill: Skill) => {})
    );
  }
}
