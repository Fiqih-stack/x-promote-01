# x-promote-01 — Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty
[`post-x-promote-make-your-own-bounty-01`](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250, top 50 paid).

## The post

One post from the public X account **@Todokashiki** quoting
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
with a photo attached, carrying `make.fun` / `@makefunai` and the play code
`makefun-beacon-lantern-oak`. The post's address is recorded in
[`POST.json`](./POST.json). Places are decided by the sum of the post's
replies, reposts and quotes at the deadline; likes and views do not count.

## The program

`main.ts` (Node 22, standard library only, no network) reads `POST.json`,
validates the entry record, and prints a summary:

```sh
node main.ts
```

## License

MIT — see [LICENSE](./LICENSE).
