#include <iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    if(n>99){
        int result = 99;
        for(int i=100;i<=n;i++){
            float a = i/100;
            float b = (i/10)%10;
            float c = i%10;
            if((a+c)/2.0==b){
                result++;
            }
        }
        cout<<result;
    }
    else{
        cout<<n;
    }

}