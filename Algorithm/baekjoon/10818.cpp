#include <iostream>
using namespace std;

int main(){
    int n, x;
    int min = 1000000;
    int max = -1000000;
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>x;
        if(x<min)min=x;
        if(x>max)max=x;
    }
    cout<<min<<" "<<max;

}