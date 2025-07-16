#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <err.h>

int part1 () {
	int accum = 0;
	int change;

	while (scanf(" %d", &change) == 1) {
		accum += change;
	}

	if (ferror(stdin)) {
		err(1, NULL);
	}

	return accum;
}

int part2 () {
	int accum = 0;
	int change;
	unsigned byte, bit;
	char *bitfield;

	if (!(bitfield = calloc(UINT_MAX / 8, 1)))
		err(1, "calloc");

	bitfield[0] = 1;

	while (1) {
		if (scanf(" %d", &change) == 1) {
			accum += change;

			byte = (unsigned)accum / 8;
			bit = 1 << ((unsigned)accum % 8);

			if (bitfield[byte] & bit) {
				return accum;
			}

			bitfield[byte] = bitfield[byte] | bit;
		} else {
			rewind(stdin);
		}
	}

	if (ferror(stdin)) {
		err(1, NULL);
	}

	return 0;
}

// ./a.out < ./input.txt
int main() {
	printf("Part 1: %d\n", part1());
	printf("Part 2: %d\n", part2());
	return 0;
}
