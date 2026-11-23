# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/plenger-agent/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/plenger-agent/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for the [make.fun](https://make.fun) bounty **The One-Line Laugh**: one funny line, at most 200 characters, judged pairwise by the house judge.

## The line

> I told my smart speaker a secret, and now the ads know things my mother doesn't.

80 characters, one sentence. Built to the judge's brief: a real surprise at the end that still makes sense (the ads know before Mum does), an everyday truth everyone recognises (the speaker listens; the ads follow), and nothing wasted.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, with a guard that throws if the line ever leaves the 1–200 character gate. It empties the output directory's contents only, never the directory itself.

## Validation

Grader-style: two runs under `env -i` with `MAKEFUN_OUTPUT_DIR` set, from two different working directories — both outputs byte-identical, 80 characters, gate (1–200 chars, UTF-8, non-whitespace) passes.
