Build Docker image
```bash
##[debug]Evaluating condition for step: 'Build Docker image'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Build Docker image
##[debug]Loading inputs
##[debug]Evaluating: format('docker build -t docker-project-image:latest .
##[debug]echo {0} | docker login ghcr.io -u {1} --password-stdin
##[debug]docker tag docker-project-image:latest ghcr.io/{2}/docker-project-image:latest
##[debug]docker push ghcr.io/{3}/docker-project-image:latest
##[debug]echo {4} | docker login --username=_ --password-stdin registry.heroku.com
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]', secrets.GHCR_PAT, github.actor, github.repository, github.repository, secrets.HEROKU_API_KEY)
##[debug]Evaluating format:
##[debug]..Evaluating String:
##[debug]..=> 'docker build -t docker-project-image:latest .
##[debug]echo {0} | docker login ghcr.io -u {1} --password-stdin
##[debug]docker tag docker-project-image:latest ghcr.io/{2}/docker-project-image:latest
##[debug]docker push ghcr.io/{3}/docker-project-image:latest
##[debug]echo {4} | docker login --username=_ --password-stdin registry.heroku.com
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]'
##[debug]..Evaluating Index:
##[debug]....Evaluating secrets:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'GHCR_PAT'
##[debug]..=> '***'
##[debug]..Evaluating Index:
##[debug]....Evaluating github:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'actor'
##[debug]..=> 'givan23'
##[debug]..Evaluating Index:
##[debug]....Evaluating github:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'repository'
##[debug]..=> 'givan23/docker-project'
##[debug]..Evaluating Index:
##[debug]....Evaluating github:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'repository'
##[debug]..=> 'givan23/docker-project'
##[debug]..Evaluating Index:
##[debug]....Evaluating secrets:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'HEROKU_API_KEY'
##[debug]..=> '***'
##[debug]=> 'docker build -t docker-project-image:latest .
##[debug]echo *** | docker login ghcr.io -u givan23 --password-stdin
##[debug]docker tag docker-project-image:latest ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]docker push ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]echo *** | docker login --username=_ --password-stdin registry.heroku.com
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]'
##[debug]Result: 'docker build -t docker-project-image:latest .
##[debug]echo *** | docker login ghcr.io -u givan23 --password-stdin
##[debug]docker tag docker-project-image:latest ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]docker push ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]echo *** | docker login --username=_ --password-stdin registry.heroku.com
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]'
##[debug]Loading env
Run docker build -t docker-project-image:latest .
##[debug]/usr/bin/bash -e /home/runner/work/_temp/0a3d976a-9a91-46c8-9b98-b4b294265923.sh
#0 building with "default" instance using docker driver
#1 [internal] load build definition from dockerfile
#1 transferring dockerfile: 454B done
#1 DONE 0.0s
#2 [internal] load metadata for docker.io/library/node:18
#2 DONE 0.0s
#3 [internal] load .dockerignore
#3 transferring context: 2B done
#3 DONE 0.0s
#4 [1/6] FROM docker.io/library/node:18
#4 DONE 0.1s
#5 [internal] load build context
#5 ...
#6 [2/6] WORKDIR /app
#6 DONE 0.1s
#5 [internal] load build context
#5 transferring context: 302.45MB 5.0s
#5 transferring context: 308.11MB 5.3s done
#5 DONE 5.4s
#7 [3/6] COPY package*.json ./
#7 DONE 1.1s
#8 [4/6] RUN npm install --legacy-peer-deps
#8 10.59 npm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
#8 11.01 npm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
#8 11.09 npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
#8 11.13 npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
#8 11.16 npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
#8 11.33 npm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
#8 11.33 npm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
#8 11.53 npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
#8 11.53 npm warn deprecated
#8 11.53 npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
#8 12.77 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
#8 12.99 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#8 13.66 npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead
#8 14.20 npm warn deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
#8 14.34 npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
#8 15.07 npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
#8 15.07 npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
#8 15.63 npm warn deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.
#8 15.63 npm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
#8 15.63 npm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
#8 15.63 npm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.
#8 15.63 npm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
#8 15.67 npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
#8 16.62 npm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead
#8 20.18 npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
#8 22.82
#8 22.82 added 1717 packages, and audited 1718 packages in 18s
#8 22.82
#8 22.82 298 packages are looking for funding
#8 22.82   run `npm fund` for details
#8 22.83
#8 22.83 10 vulnerabilities (2 moderate, 8 high)
#8 22.83
#8 22.83 To address issues that do not require attention, run:
#8 22.83   npm audit fix
#8 22.83
#8 22.83 To address all issues (including breaking changes), run:
#8 22.83   npm audit fix --force
#8 22.83
#8 22.83 Run `npm audit` for details.
#8 22.83 npm notice
#8 22.83 npm notice New major version of npm available! 10.8.2 -> 11.0.0
#8 22.83 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.0.0
#8 22.83 npm notice To update run: npm install -g npm@11.0.0
#8 22.83 npm notice
#8 DONE 24.2s
#9 [5/6] COPY . .
#9 DONE 9.3s
#10 [6/6] RUN npm run build
#10 0.302
#10 0.302 > docker-tutorial@0.1.0 build
#10 0.302 > react-scripts build
#10 0.302
#10 1.419 Creating an optimized production build...
#10 8.348 Compiled successfully.
#10 8.348
#10 8.348 File sizes after gzip:
#10 8.348
#10 8.357   58.15 kB  build/static/js/main.8f906572.js
#10 8.357   513 B     build/static/css/main.f855e6bc.css
#10 8.357
#10 8.357 The project was built assuming it is hosted at /.
#10 8.357 You can control this with the homepage field in your package.json.
#10 8.357
#10 8.357 The build folder is ready to be deployed.
#10 8.357 You may serve it with a static server:
#10 8.358
#10 8.358   npm install -g serve
#10 8.358   serve -s build
#10 8.358
#10 8.358 Find out more about deployment here:
#10 8.358
#10 8.358   https://cra.link/deployment
#10 8.358
#10 DONE 8.5s
#11 exporting to image
#11 exporting layers
#11 exporting layers 9.1s done
#11 writing image sha256:dd00414585cf9adf6f3d07a5a28ab4428fd0d0d0eeeee0b275271897d83a6f08 done
#11 naming to docker.io/library/docker-project-image:latest done
#11 DONE 9.1s
WARNING! Your password will be stored unencrypted in /home/runner/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
Login Succeeded
The push refers to repository [ghcr.io/givan23/docker-project/docker-project-image]
e83d969ec705: Preparing
e6cdb9c974ba: Preparing
1784234b878c: Preparing
30aea530f4b5: Preparing
e7ffadc73c97: Preparing
58942104bba7: Preparing
855019077787: Preparing
0444f0474352: Preparing
6d94a4929d09: Preparing
0aeeeb7c293d: Preparing
c81d4fdb67fc: Preparing
0e82d78b3ea1: Preparing
301c1bb42cc0: Preparing
58942104bba7: Waiting
855019077787: Waiting
0444f0474352: Waiting
6d94a4929d09: Waiting
0aeeeb7c293d: Waiting
c81d4fdb67fc: Waiting
0e82d78b3ea1: Waiting
301c1bb42cc0: Waiting
e7ffadc73c97: Pushed
30aea530f4b5: Pushed
e83d969ec705: Pushed
58942104bba7: Pushed
855019077787: Pushed
6d94a4929d09: Pushed
e6cdb9c974ba: Pushed
0444f0474352: Pushed
1784234b878c: Pushed
0e82d78b3ea1: Pushed
c81d4fdb67fc: Pushed
301c1bb42cc0: Pushed
0aeeeb7c293d: Pushed
latest: digest: sha256:ff81c0b3b36d6e51309e3220618e73e0e7edd31ef7aeedd120949b27671a49a6 size: 3055
WARNING! Your password will be stored unencrypted in /home/runner/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
Login Succeeded
Using default tag: latest
The push refers to repository [registry.heroku.com/docker-project-app/web]
e83d969ec705: Preparing
e6cdb9c974ba: Preparing
1784234b878c: Preparing
30aea530f4b5: Preparing
e7ffadc73c97: Preparing
58942104bba7: Preparing
855019077787: Preparing
0444f0474352: Preparing
6d94a4929d09: Preparing
0aeeeb7c293d: Preparing
c81d4fdb67fc: Preparing
0e82d78b3ea1: Preparing
301c1bb42cc0: Preparing
58942104bba7: Waiting
855019077787: Waiting
0444f0474352: Waiting
6d94a4929d09: Waiting
0aeeeb7c293d: Waiting
c81d4fdb67fc: Waiting
0e82d78b3ea1: Waiting
301c1bb42cc0: Waiting
e7ffadc73c97: Pushed
e83d969ec705: Pushed
30aea530f4b5: Pushed
58942104bba7: Pushed
855019077787: Pushed
6d94a4929d09: Pushed
0444f0474352: Pushed
0e82d78b3ea1: Pushed
e6cdb9c974ba: Pushed
c81d4fdb67fc: Pushed
0aeeeb7c293d: Pushed
latest: digest: sha256:ff81c0b3b36d6e51309e3220618e73e0e7edd31ef7aeedd120949b27671a49a6 size: 3055
##[debug]Finishing: Build Docker image
```

Release Docker image on Heroku
```bash
##[debug]Evaluating condition for step: 'Release Docker image on Heroku'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Release Docker image on Heroku
##[debug]Loading inputs
##[debug]Loading env
Run heroku container:release web -a docker-project-app
##[debug]/usr/bin/bash -e /home/runner/work/_temp/a13fb35e-9b8a-498b-827f-d42f71b5866c.sh
 ›   Warning: Our terms of service have changed: 
 ›   https://dashboard.heroku.com/terms-of-service
heroku: Press any key to open up the browser to login or q to exit: 
##[debug]Finishing: Release Docker image on Heroku
```

