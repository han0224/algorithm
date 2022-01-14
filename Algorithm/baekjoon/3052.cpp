#include <iostream>
using namespace std;

int main()
{
    int count = 0;
    int x;
    int n[42]={0,};
    for(int i=0;i<10;i++){
        cin>> x;
        if(n[x%42]==0) n[x%42] = 1;
        else continue;
    }
    for(int i:n){
        count+=i;
    }
    cout<<count;
}