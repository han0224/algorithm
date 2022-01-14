#include <iostream>
using namespace std;

int main()
{
    int n, result = 0;
    int ptr[80] = {0,};
    char x;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        // char x[80]={0,};
        // cin >> x;
        // cout << x << endl;
        // cout << sizeof(x) << endl;
        // for (int j = 0; j < 80; j++)
        // {
        //     cout << x[j];
        // }
        // cout << endl;
        int j=0;
        // cout<<"i : "<<i<<endl;
        do{
            cin>>x;
            if(x=='X') ptr[j]=0;
            else{
                if(j==0){
                    ptr[0]=1;
                }
                else{
                    ptr[j]=ptr[j-1]+1;
                }
            }
            result += ptr[j];
            j++;
        }while (getc(stdin)==' ');
        
        
        // while(cin>>x){
        //     if(x=='X') ptr[j]=0;
        //     else{
        //         if(j==0){
        //             ptr[0]=1;
        //         }
        //         else{
        //             ptr[j]=++ptr[j];
        //         }
        //     }
        //     j++;
        // }
        // for (int j = 0; x[j] != '\n'; j++)
        // {
        //     if (x[j] == 'X')
        //         ptr[j] = 0;
        //     else
        //     {
        //         if (j == 0)
        //         {
        //             ptr[j] = 1;
        //             result+=ptr[j];
        //             continue;
        //         }
        //         ptr[j] = ptr[j - 1] + 1;
        //         result+=ptr[j];
        //     }
        // }
        cout << result << '\n';
    }
}