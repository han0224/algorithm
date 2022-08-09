#include <iostream>
using namespace std;

int main(){
    int n, x;
    int a;
    int cnt=0;
    cin>>n>>x;
    for(int i=0;i<n;i++){
        cin>>a;
        if(a<x) cout<<a<<" ";
    }
}