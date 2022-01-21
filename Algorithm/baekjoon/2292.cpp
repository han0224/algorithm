#include <iostream>
using namespace std;

int main(){
    int n, sum;
    cin>>n;
    sum = 6;
    if(n==1) {cout<<n;}
    else{
        int i=0;
        while(sum<n-1){
            i++;
            sum+=(6+i*6);
        }
        cout<<i+2;
    }
}