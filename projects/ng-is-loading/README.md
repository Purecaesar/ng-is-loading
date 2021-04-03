#Usage
##Module
```
@NgModule({
  imports: [NgLoadingModule.forRoot()],
  ...
})
export class AppModule {}
```
##Component
```
@Component({
   selector: "my-app",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"]
 })
 export class AppComponent {
   @IsLoading(['short', 'long'])
   public readonly isLoading$: Observable<boolean>;
  
   @Loading('long')
   public getLongApi() {
     return api.post();
   }
 
   @Loading('short')
   public getShortApi() {
     return api.get();
   }
 }
```
You can use both decorators in any place of your application.
