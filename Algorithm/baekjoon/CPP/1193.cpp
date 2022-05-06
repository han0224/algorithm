#include <iostream>
using namespace std;

int main(){
    int n, sum = 1;
    cin>>n;
    if(n == 1) cout<<"1/1";
    else{
        int i=1;
        int result;
        while(sum<n){
            i++;
            sum+=i;
        }
        int j=sum-i+1;
        if(i%2==1){
            result = i;
            for(;j<n;j++){
                result-=1;
            }
            cout<<result<<"/"<<(i+1)-result;
        }
        else{
            result = 1;
            for(;j<n;j++){
                result+=1;
            }
            cout<<result<<"/"<<(i+1)-result;
        }
    }
}