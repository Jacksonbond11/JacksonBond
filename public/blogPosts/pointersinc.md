"What the heck are pointers" - me right before writing this.

I am currently trying to master the language of C. I want to learn a lower level language to really grasp the concepts of programming and take a look at what is happening under the hood of high level languages. My first project was building an http server. This was going pretty well for a while, then the need to use a pointer arose and I died a little bit inside.

I figure the best way to learn something is to teach it to someone else, so buckle in because you are about to learn.

To understand what a pointer is, let's first take a look at a variable in C.
```
int pie = 6;
```
This is straightforward. You first have the data type (int), then the name of the variable (pie), the assignment operator (=), and finally the value to assign. This is setting pie equal to the value of 6. But what is really happening?

When you create a variable, a part of memory is allocated to store the value. This part of memory has an address, which is notated in hexadecimal. To view this, let's look at an example.
```
#include <stdio.h>

int main()
{
        int pie = 6;
        printf("%p\n", &pie);

        return 0;
}

```
This program simply assigns the int variable pie to the value of 6, and then prints the *address* of pie. This is what the "&" symbol in front of pie in our print statement does here. Let's compile and execute this program and see what the value is:
![Hexadecimal address of variable pie](/blog/caddress.png)

Sweet! We can see the address in memory where "pie" is stored is 0x7ffedef81834. The value stored at 0x7ffedef81834 is 6. Here is a beautiful diagram for your visual learning pleasure:
![A diagram representing memory in a pc](/blog/memoryNoPoint.png)


Now that we understand what is happening when we create a variable, let's look at pointers. A pointer is essentially just a variable that holds the address of another variable. That's it. It's a very simple concept that is often confusing just due to some of the syntax. So let's look at that next. In the following code block, we will add a pointer to pie and print the value of the pointer.

```
#include <stdio.h>

int main()
{
        int pie = 6;
        int *pPie = &pie;

        printf("%p\n", &pie);
        printf("%p\n", pPie);
        return 0;
}

```

A few things to note, the data type of the pointer should match the data type of the variable being pointed to. In our example, we will make it an int. When declaring the pointer, you must put an asterisk in front the pointer name to denote that it is a pointer. Common naming convention says to first use the lowercase letter p, then the capital name of the  variable being pointed to. So in our case, the pointer to pie becomes  pPie. Now, let's execute this program and see what it prints out. Note that we are first printing the address of pie (&pie) and second printing the *value* of pPie.
![Two memory addresses in hexadecimal](/blog/cAddressPointer.png)

Sweet! We can see the value of our pointer matches the address of our variable pie. I will now find the *address* of the pointer so we can fill in our diagram:
```
#include <stdio.h>

int main()
{
        int pie = 6;
        int *pPie = &pie;

        printf("%p\n", &pie);
        printf("%p\n", &pPie);
        return 0;
}

```

Note here we are printing the *address* of the pointer by adding the "&" in front of "pPie":
![](/blog/cPointerAddress.png)

Sweet! Let's fill in our memory diagram now:
![](/blog/memoryDiagramWithPointer.png)

Finally we can see that our pointer is stored at it's own address and the value at that address is simply the address of the variable being pointed to. Not too bad!

## What can we do with pointers?
I have no idea. That's what the next blog post will be about!