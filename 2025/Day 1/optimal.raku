#!/usr/bin/env raku

my @movements = "day01.txt".IO.lines
    .map(-> $line {
        $line ~~ /^(\w)(\d+)$/ or die "bad data: $line";
        ($/[0].Str, $/[1].Int)
    });

my $pos = 50;
my $part1 = 0;
my $part2 = 0;

for @movements -> $mvmt {
    my ($d, $n) = $mvmt;

    given $d {
        when "R" {
            $part2 += ($pos + $n) div 100;
            $pos = ($pos + $n) mod 100;
        }

        when "L" {
            $part2 += $n div 100;
            if ($pos != 0 and $n mod 100 >= $pos) {
                $part2 += 1;
            }

            $pos = ($pos - $n) mod 100;
        }
    }

    if ($pos == 0) {
        $part1 += 1;
    }
}

say "Day 1, Part 1: ", $part1;
say "Day 1, Part 2: ", $part2;
