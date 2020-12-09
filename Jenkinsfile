library 'sparkPipeline'

notificationsRoom = 'Y2lzY29zcGFyazovL3VzL1JPT00vNjU0ZWVlNTAtMmUzOC0xMWViLWFlYTUtNGRlMWJjMmNkYWY0'

builder = 'NODE_JS_BUILDER'

pipelineProperties(
  name: 'wdc',
  numToKeep: isMasterBranch() ? 10 : 3,
  notifySparkRoomId: notificationsRoom
)

def shouldNotify() {
    return isMasterBranch() || isPullRequest()
}

timestamps {
  node(label: builder) {
    stage('Build') {
      def repository = checkout(scm)
      initializeEnv(env.PIPELINE_NAME, buildVersion: env.BUILD_NUMBER, scm: repository)

      if (shouldNotify()) {
        notifyPipelineRoom('Build started.', changeLog: true, toPersonEmail: env.CHANGE_AUTHOR_EMAIL)
      }
      withCredentials([]) {
        ansiColor('xterm') {
          try {
            sh "./bin/install.sh"
            
            if (isPullRequest()) {
            sh "./bin/run.sh ./bin/lint.sh"
            }

            currentBuild.result = 'SUCCESS'
            }
          catch(Exception e) {
            currentBuild.result = 'FAILURE'
            throw e
            }
          finally {
            if (shouldNotify()) {
              def message
              if (currentBuild.result == 'FAILURE') {
                message = 'Build failed.'
              } else if (currentBuild.result == 'SUCCESS') {
                message = 'Build succeeded.'
              } else {
                message = "Build finished."
            }
            notifyPipelineRoom("$message", toPersonEmail: env.CHANGE_AUTHOR_EMAIL)
          }
        }
      }
    }
    }

    if (isMasterBranch()) {
        // TODO : Add changes for build and deployment
      stage('Deploy') {
      echo 'Success'
      }
    }
  }
}
