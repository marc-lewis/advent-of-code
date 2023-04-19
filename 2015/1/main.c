#include <stdio.h>
#include <time.h>

int main()
{
  float start_time = (float)clock();
  int i, c, p1 = 0, p2 = 0;
  FILE *input_p = fopen("input.txt", "r");

  if (input_p == NULL) {
      fprintf(stderr, "Error: Could not open input file.\n");
      return 1;
  }

  for (i = 1; (c = fgetc(input_p)) != EOF; i++) {

    if (c == '(') {
      ++ p1;
    } else if (c == ')') {
      -- p1;
    }

    if(p1 == -1 && !p2) {
      p2 = i;
    }
  }

  fclose(input_p);

  printf("Santa ended up on floor %d and entered the basement at %d\n", p1, p2);
  printf("It took Santa %f ms\n", ((float)clock() - start_time) / CLOCKS_PER_SEC * 1000);
  return 0;
}
