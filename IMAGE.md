##[debug]Evaluating condition for step: 'Build Docker image'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Build Docker image
##[debug]Loading inputs
##[debug]Evaluating: format('# Build the Docker image and tag it as ''docker-project-image:latest''
##[debug]docker build -t docker-project-image:latest .
##[debug]
##[debug]# Log in to GitHub Container Registry using the PAT
##[debug]echo {0} | docker login ghcr.io -u {1} --password-stdin
##[debug]
##[debug]# Tag the Docker image for GitHub Container Registry
##[debug]docker tag docker-project-image:latest ghcr.io/{2}/docker-project-image:latest
##[debug]
##[debug]# Push the Docker image to GitHub Container Registry
##[debug]docker push ghcr.io/{3}/docker-project-image:latest
##[debug]
##[debug]# Log in to Heroku Container Registry using the Heroku API key
##[debug]echo {4} | docker login --username=_ --password-stdin registry.heroku.com
##[debug]
##[debug]# Tag the Docker image for Heroku Container Registry
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]
##[debug]# Push the Docker image to Heroku Container Registry
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]', secrets.GHCR_PAT, github.actor, github.repository, github.repository, secrets.HEROKU_API_KEY)
##[debug]Evaluating format:
##[debug]..Evaluating String:
##[debug]..=> '# Build the Docker image and tag it as ''docker-project-image:latest''
##[debug]docker build -t docker-project-image:latest .
##[debug]
##[debug]# Log in to GitHub Container Registry using the PAT
##[debug]echo {0} | docker login ghcr.io -u {1} --password-stdin
##[debug]
##[debug]# Tag the Docker image for GitHub Container Registry
##[debug]docker tag docker-project-image:latest ghcr.io/{2}/docker-project-image:latest
##[debug]
##[debug]# Push the Docker image to GitHub Container Registry
##[debug]docker push ghcr.io/{3}/docker-project-image:latest
##[debug]
##[debug]# Log in to Heroku Container Registry using the Heroku API key
##[debug]echo {4} | docker login --username=_ --password-stdin registry.heroku.com
##[debug]
##[debug]# Tag the Docker image for Heroku Container Registry
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]
##[debug]# Push the Docker image to Heroku Container Registry
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
##[debug]=> '# Build the Docker image and tag it as ''docker-project-image:latest''
##[debug]docker build -t docker-project-image:latest .
##[debug]
##[debug]# Log in to GitHub Container Registry using the PAT
##[debug]echo *** | docker login ghcr.io -u givan23 --password-stdin
##[debug]
##[debug]# Tag the Docker image for GitHub Container Registry
##[debug]docker tag docker-project-image:latest ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]
##[debug]# Push the Docker image to GitHub Container Registry
##[debug]docker push ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]
##[debug]# Log in to Heroku Container Registry using the Heroku API key
##[debug]echo *** | docker login --username=_ --password-stdin registry.heroku.com
##[debug]
##[debug]# Tag the Docker image for Heroku Container Registry
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]
##[debug]# Push the Docker image to Heroku Container Registry
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]'
##[debug]Result: '# Build the Docker image and tag it as ''docker-project-image:latest''
##[debug]docker build -t docker-project-image:latest .
##[debug]
##[debug]# Log in to GitHub Container Registry using the PAT
##[debug]echo *** | docker login ghcr.io -u givan23 --password-stdin
##[debug]
##[debug]# Tag the Docker image for GitHub Container Registry
##[debug]docker tag docker-project-image:latest ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]
##[debug]# Push the Docker image to GitHub Container Registry
##[debug]docker push ghcr.io/givan23/docker-project/docker-project-image:latest
##[debug]
##[debug]# Log in to Heroku Container Registry using the Heroku API key
##[debug]echo *** | docker login --username=_ --password-stdin registry.heroku.com
##[debug]
##[debug]# Tag the Docker image for Heroku Container Registry
##[debug]docker tag docker-project-image:latest registry.heroku.com/docker-project-app/web
##[debug]
##[debug]# Push the Docker image to Heroku Container Registry
##[debug]docker push registry.heroku.com/docker-project-app/web
##[debug]'
##[debug]Loading env
Run # Build the Docker image and tag it as 'docker-project-image:latest'
##[debug]/usr/bin/bash -e /home/runner/work/_temp/d2e2ec8d-539e-49ad-8f8d-cf66b578ade8.sh
#0 building with "default" instance using docker driver

#1 [internal] load build definition from dockerfile
#1 transferring dockerfile: 459B done
#1 DONE 0.0s

#2 [internal] load metadata for docker.io/library/node:16
#2 ...

#3 [auth] library/node:pull token for registry-1.docker.io
#3 DONE 0.0s

#2 [internal] load metadata for docker.io/library/node:16
#2 DONE 1.0s

#4 [internal] load .dockerignore
#4 transferring context: 2B done
#4 DONE 0.0s

#5 [1/6] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b
#5 resolve docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b 0.0s done
#5 sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5 0B / 51.89MB 0.1s
#5 sha256:7e9bf114588c05b2df612b083b96582f3b8dbf51647aa6138a50d09d42df2454 0B / 17.58MB 0.1s
#5 sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b 776B / 776B done
#5 sha256:c94b82f9827cab6e421b350965a9ef11b25b13ffbd1030536203d541f55dcbe2 2.00kB / 2.00kB done
#5 sha256:1ddc7e4055fdb6f6bf31063b593befda814294f9f904b6ddfc21ab1513bafa8e 7.23kB / 7.23kB done
#5 sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 0B / 50.50MB 0.1s
#5 sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 9.30MB / 50.50MB 0.2s
#5 sha256:7e9bf114588c05b2df612b083b96582f3b8dbf51647aa6138a50d09d42df2454 9.93MB / 17.58MB 0.3s
#5 sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 24.12MB / 50.50MB 0.3s
#5 sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5 31.46MB / 51.89MB 0.5s
#5 sha256:7e9bf114588c05b2df612b083b96582f3b8dbf51647aa6138a50d09d42df2454 17.58MB / 17.58MB 0.4s done
#5 sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 50.50MB / 50.50MB 0.5s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 0B / 191.90MB 0.5s
#5 sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5 45.09MB / 51.89MB 0.6s
#5 sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 50.50MB / 50.50MB 0.5s done
#5 extracting sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017
#5 sha256:ae3b95bbaa61ce24cefdd89e7c74d6fbd7713b2bcae93af47063d06bd7e02172 0B / 4.20kB 0.6s
#5 sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5 51.89MB / 51.89MB 0.7s done
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 24.17MB / 191.90MB 0.7s
#5 sha256:ae3b95bbaa61ce24cefdd89e7c74d6fbd7713b2bcae93af47063d06bd7e02172 4.20kB / 4.20kB 0.7s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 42.99MB / 191.90MB 0.8s
#5 sha256:ae3b95bbaa61ce24cefdd89e7c74d6fbd7713b2bcae93af47063d06bd7e02172 4.20kB / 4.20kB 0.7s done
#5 sha256:0e421f66aff42bb069dffc26af6d132194b22a1082b08c5ef7cd69c627783c04 0B / 34.79MB 0.8s
#5 sha256:ca266fd6192108b67fb57b74753a8c4ca5d8bd458baae3d4df7ce9f42dedcc1d 0B / 2.27MB 0.8s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 68.16MB / 191.90MB 1.0s
#5 sha256:0e421f66aff42bb069dffc26af6d132194b22a1082b08c5ef7cd69c627783c04 34.79MB / 34.79MB 1.0s
#5 sha256:ca266fd6192108b67fb57b74753a8c4ca5d8bd458baae3d4df7ce9f42dedcc1d 2.27MB / 2.27MB 0.9s done
#5 sha256:ee7d78be1eb92caf6ae84fc3af736b23eca018d5dedc967ae5bdee6d7082403b 450B / 450B 1.0s done
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 79.69MB / 191.90MB 1.1s
#5 sha256:0e421f66aff42bb069dffc26af6d132194b22a1082b08c5ef7cd69c627783c04 34.79MB / 34.79MB 1.0s done
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 97.52MB / 191.90MB 1.2s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 108.00MB / 191.90MB 1.3s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 127.31MB / 191.90MB 1.4s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 145.75MB / 191.90MB 1.5s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 191.90MB / 191.90MB 1.8s
#5 sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 191.90MB / 191.90MB 2.0s done
#5 extracting sha256:311da6c465ea1576925360eba391bcd32dece9be95960a0bc9ffcb25fe712017 3.8s done
#5 extracting sha256:7e9bf114588c05b2df612b083b96582f3b8dbf51647aa6138a50d09d42df2454
#5 extracting sha256:7e9bf114588c05b2df612b083b96582f3b8dbf51647aa6138a50d09d42df2454 0.8s done
#5 extracting sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5
#5 ...

#6 [internal] load build context
#6 transferring context: 308.07MB 7.4s done
#6 DONE 7.5s

#5 [1/6] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b
#5 extracting sha256:ffd9397e94b74abcb54e514f1430e00f604328d1f895eadbd482f08cc02444e5 3.1s done
#5 extracting sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e
#5 extracting sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 5.1s
#5 extracting sha256:513d779256048c961239af5f500589330546b072775217272e19ffae1635e98e 5.2s done
#5 extracting sha256:ae3b95bbaa61ce24cefdd89e7c74d6fbd7713b2bcae93af47063d06bd7e02172
#5 extracting sha256:ae3b95bbaa61ce24cefdd89e7c74d6fbd7713b2bcae93af47063d06bd7e02172 done
#5 extracting sha256:0e421f66aff42bb069dffc26af6d132194b22a1082b08c5ef7cd69c627783c04 0.1s
#5 extracting sha256:0e421f66aff42bb069dffc26af6d132194b22a1082b08c5ef7cd69c627783c04 1.0s done
#5 extracting sha256:ca266fd6192108b67fb57b74753a8c4ca5d8bd458baae3d4df7ce9f42dedcc1d
#5 extracting sha256:ca266fd6192108b67fb57b74753a8c4ca5d8bd458baae3d4df7ce9f42dedcc1d 0.0s done
#5 extracting sha256:ee7d78be1eb92caf6ae84fc3af736b23eca018d5dedc967ae5bdee6d7082403b done
#5 DONE 16.5s

#7 [2/6] WORKDIR /app
#7 DONE 0.0s

#8 [3/6] COPY package*.json ./
#8 DONE 0.3s

#9 [4/6] RUN npm install --legacy-peer-deps
#9 1.310 npm WARN EBADENGINE Unsupported engine {
#9 1.311 npm WARN EBADENGINE   package: '@puppeteer/browsers@2.6.1',
#9 1.311 npm WARN EBADENGINE   required: { node: '>=18' },
#9 1.311 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.311 npm WARN EBADENGINE }
#9 1.312 npm WARN EBADENGINE Unsupported engine {
#9 1.312 npm WARN EBADENGINE   package: '@testing-library/dom@10.4.0',
#9 1.312 npm WARN EBADENGINE   required: { node: '>=18' },
#9 1.312 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.313 npm WARN EBADENGINE }
#9 1.313 npm WARN EBADENGINE Unsupported engine {
#9 1.313 npm WARN EBADENGINE   package: '@testing-library/react@16.1.0',
#9 1.313 npm WARN EBADENGINE   required: { node: '>=18' },
#9 1.313 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.313 npm WARN EBADENGINE }
#9 1.314 npm WARN EBADENGINE Unsupported engine {
#9 1.314 npm WARN EBADENGINE   package: '@webpack-cli/configtest@3.0.1',
#9 1.314 npm WARN EBADENGINE   required: { node: '>=18.12.0' },
#9 1.314 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.314 npm WARN EBADENGINE }
#9 1.314 npm WARN EBADENGINE Unsupported engine {
#9 1.314 npm WARN EBADENGINE   package: '@webpack-cli/info@3.0.1',
#9 1.314 npm WARN EBADENGINE   required: { node: '>=18.12.0' },
#9 1.314 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.315 npm WARN EBADENGINE }
#9 1.315 npm WARN EBADENGINE Unsupported engine {
#9 1.315 npm WARN EBADENGINE   package: '@webpack-cli/serve@3.0.1',
#9 1.315 npm WARN EBADENGINE   required: { node: '>=18.12.0' },
#9 1.315 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.315 npm WARN EBADENGINE }
#9 1.317 npm WARN EBADENGINE Unsupported engine {
#9 1.317 npm WARN EBADENGINE   package: 'css-loader@7.1.2',
#9 1.317 npm WARN EBADENGINE   required: { node: '>= 18.12.0' },
#9 1.317 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.317 npm WARN EBADENGINE }
#9 1.318 npm WARN EBADENGINE Unsupported engine {
#9 1.318 npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@8.19.0',
#9 1.318 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.318 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.318 npm WARN EBADENGINE }
#9 1.319 npm WARN EBADENGINE Unsupported engine {
#9 1.319 npm WARN EBADENGINE   package: '@typescript-eslint/types@8.19.0',
#9 1.319 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.319 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.319 npm WARN EBADENGINE }
#9 1.319 npm WARN EBADENGINE Unsupported engine {
#9 1.319 npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@8.19.0',
#9 1.319 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.319 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.319 npm WARN EBADENGINE }
#9 1.320 npm WARN EBADENGINE Unsupported engine {
#9 1.320 npm WARN EBADENGINE   package: '@typescript-eslint/utils@8.19.0',
#9 1.320 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.320 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.320 npm WARN EBADENGINE }
#9 1.320 npm WARN EBADENGINE Unsupported engine {
#9 1.320 npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.19.0',
#9 1.320 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.320 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.320 npm WARN EBADENGINE }
#9 1.320 npm WARN EBADENGINE Unsupported engine {
#9 1.320 npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.2.0',
#9 1.320 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.320 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.320 npm WARN EBADENGINE }
#9 1.321 npm WARN EBADENGINE Unsupported engine {
#9 1.321 npm WARN EBADENGINE   package: 'eslint-plugin-testing-library@7.1.1',
#9 1.321 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0', pnpm: '^9.14.0' },
#9 1.321 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.321 npm WARN EBADENGINE }
#9 1.321 npm WARN EBADENGINE Unsupported engine {
#9 1.321 npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@8.19.0',
#9 1.321 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.321 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.321 npm WARN EBADENGINE }
#9 1.321 npm WARN EBADENGINE Unsupported engine {
#9 1.321 npm WARN EBADENGINE   package: '@typescript-eslint/types@8.19.0',
#9 1.321 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.321 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.321 npm WARN EBADENGINE }
#9 1.322 npm WARN EBADENGINE Unsupported engine {
#9 1.322 npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@8.19.0',
#9 1.322 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.322 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.322 npm WARN EBADENGINE }
#9 1.322 npm WARN EBADENGINE Unsupported engine {
#9 1.322 npm WARN EBADENGINE   package: '@typescript-eslint/utils@8.19.0',
#9 1.322 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.322 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.322 npm WARN EBADENGINE }
#9 1.323 npm WARN EBADENGINE Unsupported engine {
#9 1.323 npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.19.0',
#9 1.323 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.323 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.323 npm WARN EBADENGINE }
#9 1.323 npm WARN EBADENGINE Unsupported engine {
#9 1.323 npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.2.0',
#9 1.323 npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
#9 1.323 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.323 npm WARN EBADENGINE }
#9 1.326 npm WARN EBADENGINE Unsupported engine {
#9 1.326 npm WARN EBADENGINE   package: 'lighthouse@12.3.0',
#9 1.326 npm WARN EBADENGINE   required: { node: '>=18.16' },
#9 1.326 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.326 npm WARN EBADENGINE }
#9 1.328 npm WARN EBADENGINE Unsupported engine {
#9 1.328 npm WARN EBADENGINE   package: 'puppeteer-core@23.11.1',
#9 1.328 npm WARN EBADENGINE   required: { node: '>=18' },
#9 1.329 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.329 npm WARN EBADENGINE }
#9 1.330 npm WARN EBADENGINE Unsupported engine {
#9 1.330 npm WARN EBADENGINE   package: 'style-loader@4.0.0',
#9 1.330 npm WARN EBADENGINE   required: { node: '>= 18.12.0' },
#9 1.331 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.331 npm WARN EBADENGINE }
#9 1.331 npm WARN EBADENGINE Unsupported engine {
#9 1.331 npm WARN EBADENGINE   package: 'webpack-cli@6.0.1',
#9 1.331 npm WARN EBADENGINE   required: { node: '>=18.12.0' },
#9 1.331 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.331 npm WARN EBADENGINE }
#9 1.332 npm WARN EBADENGINE Unsupported engine {
#9 1.332 npm WARN EBADENGINE   package: 'commander@12.1.0',
#9 1.332 npm WARN EBADENGINE   required: { node: '>=18' },
#9 1.332 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.332 npm WARN EBADENGINE }
#9 1.332 npm WARN EBADENGINE Unsupported engine {
#9 1.332 npm WARN EBADENGINE   package: 'webpack-merge@6.0.1',
#9 1.332 npm WARN EBADENGINE   required: { node: '>=18.0.0' },
#9 1.332 npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
#9 1.332 npm WARN EBADENGINE }
#9 5.461 npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
#9 5.844 npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
#9 5.889 npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
#9 5.928 npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
#9 5.995 npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
#9 6.298 npm WARN deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
#9 6.298 npm WARN deprecated
#9 6.298 npm WARN deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
#9 6.331 npm WARN deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
#9 6.637 npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
#9 7.887 npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
#9 8.122 npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#9 8.765 npm WARN deprecated domexception@4.0.0: Use your platform's native DOMException instead
#9 9.490 npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
#9 9.865 npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
#9 10.26 npm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
#9 10.29 npm WARN deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
#9 10.82 npm WARN deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
#9 10.85 npm WARN deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.
#9 10.85 npm WARN deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
#9 10.85 npm WARN deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
#9 10.88 npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
#9 11.15 npm WARN deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.
#9 11.99 npm WARN deprecated domexception@2.0.1: Use your platform's native DOMException instead
#9 15.83 npm WARN deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
#9 18.14
#9 18.14 added 1717 packages, and audited 1718 packages in 18s
#9 18.14
#9 18.14 298 packages are looking for funding
#9 18.14   run `npm fund` for details
#9 18.14
#9 18.14 10 vulnerabilities (2 moderate, 8 high)
#9 18.14
#9 18.14 To address issues that do not require attention, run:
#9 18.14   npm audit fix
#9 18.14
#9 18.14 To address all issues (including breaking changes), run:
#9 18.14   npm audit fix --force
#9 18.14
#9 18.14 Run `npm audit` for details.
#9 18.15 npm notice
#9 18.15 npm notice New major version of npm available! 8.19.4 -> 11.0.0
#9 18.15 npm notice Changelog: <https://github.com/npm/cli/releases/tag/v11.0.0>
#9 18.15 npm notice Run `npm install -g npm@11.0.0` to update!
#9 18.15 npm notice
#9 DONE 19.1s

#10 [5/6] COPY . .
#10 DONE 9.3s

#11 [6/6] RUN npm run build
#11 0.442
#11 0.442 > docker-tutorial@0.1.0 build
#11 0.442 > react-scripts build
#11 0.442
#11 1.586 Creating an optimized production build...
#11 8.776 Compiled successfully.
#11 8.776
#11 8.776 File sizes after gzip:
#11 8.776
#11 8.790   58.13 kB  build/static/js/main.8f906572.js
#11 8.790   515 B     build/static/css/main.f855e6bc.css
#11 8.790
#11 8.790 The project was built assuming it is hosted at /.
#11 8.790 You can control this with the homepage field in your package.json.
#11 8.791
#11 8.791 The build folder is ready to be deployed.
#11 8.791 You may serve it with a static server:
#11 8.791
#11 8.791   npm install -g serve
#11 8.791   serve -s build
#11 8.791
#11 8.791 Find out more about deployment here:
#11 8.791
#11 8.791   https://cra.link/deployment
#11 8.791
#11 DONE 8.9s

#12 exporting to image
#12 exporting layers
#12 exporting layers 9.2s done
#12 writing image sha256:bd95b7da298ee88c30a492a1e4b816b3467fb05cfeb08579daedf2fe9631270e done
#12 naming to docker.io/library/docker-project-image:latest done
#12 DONE 9.2s
WARNING! Your password will be stored unencrypted in /home/runner/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
The push refers to repository [ghcr.io/givan23/docker-project/docker-project-image]
721aec85f229: Preparing
a10b7ae65933: Preparing
aa9d59851d73: Preparing
512877527061: Preparing
fcc3a9a28db0: Preparing
be322b479aee: Preparing
d41bcd3a037b: Preparing
fe0d845e767b: Preparing
f25ec1d93a58: Preparing
794ce8b1b516: Preparing
3220beed9b06: Preparing
684f82921421: Preparing
9af5f53e8f62: Preparing
be322b479aee: Waiting
d41bcd3a037b: Waiting
fe0d845e767b: Waiting
684f82921421: Waiting
f25ec1d93a58: Waiting
9af5f53e8f62: Waiting
794ce8b1b516: Waiting
3220beed9b06: Waiting
fcc3a9a28db0: Pushed
512877527061: Pushed
be322b479aee: Layer already exists
721aec85f229: Pushed
d41bcd3a037b: Layer already exists
fe0d845e767b: Layer already exists
794ce8b1b516: Layer already exists
f25ec1d93a58: Layer already exists
3220beed9b06: Layer already exists
684f82921421: Layer already exists
9af5f53e8f62: Layer already exists
a10b7ae65933: Pushed
aa9d59851d73: Pushed
latest: digest: sha256:e85f37dd3231722335d04c2002bab571fca42f8c45179bb51c12d33b55029f87 size: 3055
WARNING! Your password will be stored unencrypted in /home/runner/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
Using default tag: latest
The push refers to repository [registry.heroku.com/docker-project-app/web]
721aec85f229: Preparing
a10b7ae65933: Preparing
aa9d59851d73: Preparing
512877527061: Preparing
fcc3a9a28db0: Preparing
be322b479aee: Preparing
d41bcd3a037b: Preparing
fe0d845e767b: Preparing
f25ec1d93a58: Preparing
794ce8b1b516: Preparing
3220beed9b06: Preparing
684f82921421: Preparing
9af5f53e8f62: Preparing
f25ec1d93a58: Waiting
be322b479aee: Waiting
794ce8b1b516: Waiting
3220beed9b06: Waiting
684f82921421: Waiting
d41bcd3a037b: Waiting
fe0d845e767b: Waiting
9af5f53e8f62: Waiting
fcc3a9a28db0: Pushed
512877527061: Pushed
721aec85f229: Pushed
be322b479aee: Layer already exists
d41bcd3a037b: Layer already exists
fe0d845e767b: Layer already exists
f25ec1d93a58: Layer already exists
794ce8b1b516: Layer already exists
3220beed9b06: Layer already exists
684f82921421: Layer already exists
9af5f53e8f62: Layer already exists
a10b7ae65933: Pushed
aa9d59851d73: Pushed
latest: digest: sha256:e85f37dd3231722335d04c2002bab571fca42f8c45179bb51c12d33b55029f87 size: 3055
##[debug]Finishing: Build Docker image
2s
##[debug]Evaluating condition for step: 'Release Docker image on Heroku'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Release Docker image on Heroku
##[debug]Loading inputs
##[debug]Loading env
Run # Release the Docker image on Heroku
##[debug]/usr/bin/bash -e /home/runner/work/_temp/98941722-3f2f-4023-9a1d-ada530cd44e9.sh
›   Warning: Our terms of service have changed:
›   https://dashboard.heroku.com/terms-of-service
heroku: Press any key to open up the browser to login or q to exit:
##[debug]Finishing: Release Docker image on Heroku
0s
##[debug]Evaluating condition for step: 'Run echo "🍏 This job's status is ${{ job.status }}."'
##[debug]Evaluating: format('echo "🍏 This job''s status is {0}."', job.status)
##[debug]Evaluating format:
##[debug]..Evaluating String:
##[debug]..=> 'echo "🍏 This job''s status is {0}."'
##[debug]..Evaluating Index:
##[debug]....Evaluating job:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'status'
##[debug]..=> 'success'
##[debug]=> 'echo "🍏 This job''s status is success."'
##[debug]Result: 'echo "🍏 This job''s status is success."'
##[debug]Set step '__run_17' display name to: 'Run echo "🍏 This job's status is success."'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Run echo "🍏 This job's status is success."
##[debug]Loading inputs
##[debug]Evaluating: format('echo "🍏 This job''s status is {0}."', job.status)
##[debug]Evaluating format:
##[debug]..Evaluating String:
##[debug]..=> 'echo "🍏 This job''s status is {0}."'
##[debug]..Evaluating Index:
##[debug]....Evaluating job:
##[debug]....=> Object
##[debug]....Evaluating String:
##[debug]....=> 'status'
##[debug]..=> 'success'
##[debug]=> 'echo "🍏 This job''s status is success."'
##[debug]Result: 'echo "🍏 This job''s status is success."'
##[debug]Loading env
Run echo "🍏 This job's status is success."
##[debug]/usr/bin/bash -e /home/runner/work/_temp/27af2351-9577-4c6e-b34f-4275f5be4fef.sh
🍏 This job's status is success.
##[debug]Finishing: Run echo "🍏 This job's status is success."
0s
##[debug]Evaluating condition for step: 'Post Set up Node.js'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Post Set up Node.js
##[debug]Loading inputs
##[debug]Evaluating: (((github.server_url == 'https://github.com') && github.token) || '')
##[debug]Evaluating Or:
##[debug]..Evaluating And:
##[debug]....Evaluating Equal:
##[debug]......Evaluating Index:
##[debug]........Evaluating github:
##[debug]........=> Object
##[debug]........Evaluating String:
##[debug]........=> 'server_url'
##[debug]......=> 'https://github.com'
##[debug]......Evaluating String:
##[debug]......=> 'https://github.com'
##[debug]....=> true
##[debug]....Evaluating Index:
##[debug]......Evaluating github:
##[debug]......=> Object
##[debug]......Evaluating String:
##[debug]......=> 'token'
##[debug]....=> '***'
##[debug]..=> '***'
##[debug]=> '***'
##[debug]Expanded: ((('https://github.com' == 'https://github.com') && '***') || '')
##[debug]Result: '***'
##[debug]Loading env
Post job cleanup.
##[debug]Caching for '' is not supported
##[debug]Node Action run completed with exit code 0
##[debug]Finishing: Post Set up Node.js
0s
##[debug]Evaluating condition for step: 'Post Check out repository code'
##[debug]Evaluating: always()
##[debug]Evaluating always:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Post Check out repository code
##[debug]Loading inputs
##[debug]Evaluating: github.repository
##[debug]Evaluating Index:
##[debug]..Evaluating github:
##[debug]..=> Object
##[debug]..Evaluating String:
##[debug]..=> 'repository'
##[debug]=> 'givan23/docker-project'
##[debug]Result: 'givan23/docker-project'
##[debug]Evaluating: github.token
##[debug]Evaluating Index:
##[debug]..Evaluating github:
##[debug]..=> Object
##[debug]..Evaluating String:
##[debug]..=> 'token'
##[debug]=> '***'
##[debug]Result: '***'
##[debug]Loading env
Post job cleanup.
##[debug]Getting git version
/usr/bin/git version
git version 2.47.1
##[debug]0
##[debug]git version 2.47.1
##[debug]
##[debug]Set git useragent to: git/2.47.1 (github-actions-checkout)
::add-mask::***
Temporarily overriding HOME='/home/runner/work/_temp/3537aa29-2f52-4627-863c-b986fbba8f74' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/docker-project/docker-project
##[debug]0
##[debug]
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
##[debug]1
##[debug]
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
##[debug]0
##[debug]
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
##[debug]0
##[debug]http.https://github.com/.extraheader
##[debug]
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
##[debug]0
##[debug]
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
##[debug]0
##[debug]
##[debug]Unsetting HOME override
##[debug]Node Action run completed with exit code 0
##[debug]Finishing: Post Check out repository code