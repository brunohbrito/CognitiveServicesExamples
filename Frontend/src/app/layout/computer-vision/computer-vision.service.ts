import { HttpClient } from '@angular/common/http';
import { FileUpload } from '../../shared/models/FileUpload';
import { Injectable } from '@angular/core';
import { ImageAnalisys } from '../../shared/models/ImageAnalysis';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ComputerVisionService {
    constructor(private http: HttpClient) {
        // set token if saved in local storage
    }
    public getImageInfo(data: FileUpload): Observable<ImageAnalisys> {
        return this.http.post<ImageAnalisys>(environment.API_URL + 'computer-vision/analyzeImage', data);
    }

    public getImageInfoFromUrl(data: string): Observable<ImageAnalisys> {
        return this.http.post<ImageAnalisys>(environment.API_URL + 'computer-vision/analyzeImageFromUrl', { url: data });
    }
}
