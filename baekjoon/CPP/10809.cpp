#include <iostream>
using namespace std;

int main(){
    string str;
    int n[26];
    for(int i=0;i<26;i++){
        n[i]=-1;
    }
    cin>>str;
    for(int i=0;str[i]!='\0';i++){
        if(n[str[i]-'a']==-1) n[str[i]-'a']=i;
    }
    for(int i:n){
        cout<<i<<' ';
    }
}