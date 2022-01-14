#include <iostream>
using namespace std;

int main()
{
    string str;
    int maxIndex = 0, max;
    bool isOne = true;
    int index[26]={0, };
    getline(cin, str);
    for(char s:str){
        if(s>='A' && s<='Z') index[s-'A']++;
        else index[s-'a']++;
    }
    for(int i=0;i<26;i++){
        if(maxIndex == index[i]) {
            isOne = false;
            }
        else if(maxIndex<index[i]){
            isOne = true;
            maxIndex=index[i];
            max = i;
        }
    }
    if(isOne) cout<<char('A' + max);
    else cout<<"?";

}