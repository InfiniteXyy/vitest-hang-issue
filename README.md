https://github.com/vitest-dev/vitest/issues/3077#issuecomment-1867306736

```sh
docker build . -t vitest
docker run -it -v ./src:/app/src vitest /bin/bash
```

Play with configs, my findings:
1. It is more likely to hang when test cases failed. (not sure, you can try comment & uncomment `data-testid="message"` in Message.tsx)
2. Node 18/19 will hang, while it seems that there are no issues with version 20+.
3. Setting `globals: true` and using the global vitest function increases the possibility of hanging.
4. The higher count of tests, the higher the chance of hanging.



