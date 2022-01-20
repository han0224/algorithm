#include <iostream>
#include <vector>
using namespace std;

long long sum(std::vector<int> &a){
    int result = 0;
    for(int i:a){
        result+=i;
    }
    return result;
}

int main(){
    vector<int>a={1,2,3,4,5,6,7,8,9,10};
    cout<<sum(a)<<endl;
}