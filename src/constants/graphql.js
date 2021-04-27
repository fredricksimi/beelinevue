import gql from 'graphql-tag'

export const ALL_CHALLENGES_QUERY = gql `
    query AllChallengesQuery {
        challenges{
            id
            title
            image
            status
            description
            prize
            slug
        }
    }
`;

export const CHALLENGE_QUERY = gql `
    query ChallengeQuery($id: Int) {
        challenge(id: $id) {
            id
            title
            image
            status
            description
            prize
            slug
            openUntil
            howToParticipate
            pointOfContact
            whoCanParticipate
            additionalInformation
        }
    }
`;

export const OTHER_CHALLENGES_QUERY = gql `
    query OtherChallengesQuery {
        challenges{
            id
            title
            description
            slug
        }
    }
`;