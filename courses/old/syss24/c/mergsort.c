#include <stdlib.h>

void merg(int *arr, size_t l, size_t m, size_t r, int *tmp);
void help(int *arr, size_t l, size_t r, int *tmp);

void sort(int *arr, size_t siz) 
{
    int *tmp = (int *)malloc(size * sizeof(int));
    help(arr, 0, siz - 1, tmp);
    free(tmp);
}

void help(int *arr, size_t l, size_t r, int *tmp) 
{
    if (l < r) {
        help(arr, l, l + (r - l) / 2, tmp);
        help(arr, l + (r - l) / 2 + 1, r, tmp);
        merg(arr, l, l + (r - l) / 2, r, tmp);
    }
}

void merg(int *arr, size_t l, size_t m, size_t r, int *tmp)
{
    size_t i, j, k, n1 = m - l + 1, n2 = r - m;
    for ( i = 0 ; i < n1 ; i++ ) { tmp[i]      = arr[l + i];     }
    for ( j = 0 ; j < n2 ; j++ ) { tmp[n1 + j] = arr[m + 1 + j]; }
    i = 0 ; j = n1 ; k = l ;
    while (i < n1 && j < n1 + n2) {
        if ( tmp[i] <= tmp[j] ) { 
            arr[k] = tmp[i++] ;
        } else {
            arr[k] = tmp[j++] ;
        }
        k++;
    }
    while ( i < n1     ) { arr[k++] = tmp[i++] ; }
    while ( j < n1 + n2) { arr[k++] = tmp[j++] ; }
}

