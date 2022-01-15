#include <iostream>
using namespace std;

int main(){
    int n, i;
    cin>>n;
    i = n/5;
    while(i>0){
        if((n-5*i)%3==0){
            cout<<i+((n-5*i)/3);
            return 0;
        }else{
            i--;
        }
    }
    if(n%3==0)cout<<n/3;
    else cout<<-1;
}