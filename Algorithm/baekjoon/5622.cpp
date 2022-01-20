#include <iostream>
using namespace std;

int main(){
    string str;
    int n[8]={0,};
    int result = 0;
    cin>>str;
    for(char s:str){
        if(s>='A'&&s<='C')n[0]++;
        else if(s>='D'&&s<='F')n[1]++;
        else if(s>='G'&&s<='I')n[2]++;
        else if(s>='J'&&s<='L')n[3]++;
        else if(s>='M'&&s<='O')n[4]++;
        else if(s>='P'&&s<='S')n[5]++;
        else if(s>='T'&&s<='V')n[6]++;
        else n[7]++;
    }
    for(int i=0;i<8;i++){
       result+=(i+3)*n[i];    
    }
    cout<<result;
}