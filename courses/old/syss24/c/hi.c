#include <stdio.h>
#include <stdlib.h>

	int main()
	{
		int *p = malloc(sizeof(int)) ;
		*p = 0 ;
		int *q = malloc(sizeof(int) * 2) ;
		*q = 1 ;
		q[1] = 2;
		free(p) ;
		p = q ;
//		return 0 ;
	}

