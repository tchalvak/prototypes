#include <stdio.h>

int main()
{


for (int i = 1; i <= 100; i ++)
{

    if (0 == i % 3)
        printf("%s", "Ninja ");

    if (0 == i % 5)
        printf("%s", "Turtles ");



    if (0 != i % 5 && 0 != i % 3)
        printf("%d", i);

    printf("\n");
}

}
