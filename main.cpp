#include <iostream>

using namespace std;
int vnum,arcnum;
char vertex[100];
int arc[100][100];
struct shortedge
{
   int adjvex;
   int lowcost;
}edge[100];
int getindex(char vchar)
{
     int i;
     for (i=0;i<vnum;i++)
     {
         if (vertex[i]==vchar)
            return i;
     }
     return -1;
}
void display()
{
   int i,j;
   for (i=0;i<vnum;i++)
   {
       for (j=0;j<vnum;j++)
       {
           cout<<arc[i][j]<<" ";
       }
       cout<<endl;
   }
}
void shengdu(int v)
{
    static int visited[100]={0};
      cout<<vertex[v]<<" ";
      visited[v]=1;
     int i;
     for (i=0;i<vnum;i++)
     {
         if (visited[i]==0&&arc[v][i]>0&&arc[v][i]<100)
         {
              shengdu(i);
         }
     }
}
void guangdu(int v)
{
    int visited[100]={0};
    int queue[100];
    int front=-1,rear=-1,i;
    queue[++rear]=v;
    visited[v]=1;
    cout<<vertex[v]<<" ";
    while (rear!=front)
    {
        int w=queue[++front];
        for (i=0;i<vnum;i++)
        {
            if (arc[i][w]>0&&arc[i][w]<100&&visited[i]==0)
            {
                visited[i]=1;
                cout<<vertex[i]<<" ";
                queue[++rear]=i;
            }
        }
    }
}
void prim()
{
   int i,j,k;
   for (i=0;i<vnum;i++) //初始化
   {
       edge[i].adjvex=0;
       edge[i].lowcost=arc[0][i];
   }
   for (i=0;i<vnum-1;i++) //进行v-1 轮 每次找到一条最小边 并更新数组
   {
       int miniindex;
       int  min=100;
        for (j=0;j<vnum;j++)
        {
            if (edge[j].lowcost<min&&edge[j].lowcost!=0)
            {
                min=edge[j].lowcost;
                miniindex=j;
            }
        }
        cout<<vertex[edge[miniindex].adjvex]<<"-"<<vertex[miniindex]<<"，权值为:"<<min<<endl;
        edge[miniindex].lowcost=0;
        //更新
        for (k=0;k<vnum;k++)
        {
            if (edge[k].lowcost!=0&&edge[k].lowcost>arc[miniindex][k])
            {
                edge[k].lowcost=arc[miniindex][k];
                edge[k].adjvex=miniindex;
            }
        }
   }
}
int main()
{
     int i,j,k;
     cin>>vnum;
     for (i=0;i<vnum;i++)
        cin>>vertex[i];
    for (i=0;i<vnum;i++)
   {
       for (j=0;j<vnum;j++)
       {
           if (i!=j)
            arc[i][j]=100;
           else
            arc[i][j]=0;
       }
   }
     cin>>arcnum;
     for (i=0;i<arcnum;i++)
     {
          int v1,v2,weight;
          char from,to;
          cin>>from>>to>>weight;
          v1=getindex(from);
          v2=getindex(to);
          arc[v1][v2]=weight;
          arc[v2][v1]=weight;
     }
    display();
   shengdu(0);
   cout<<endl;
   guangdu(0);
    cout<<endl<<"最小生成树"<<endl;
    prim();
    return 0;
}
/**
6
A B C D E F
9
A C 46
A F 19
A B 34
B E 12
E F 26
D E 38
D F 25
C D 17
C F 25
*/
