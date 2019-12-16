import expect from "expect"
import Im from "immutable"
import wgetify from "core/wgetify"

describe("wgetify", function() {

    it("returns null", function() {
        var req = {
            url: "http://example.com",
            method: "POST",
            body: {
                id: 0,
                name: "doggie",
                status: "available"
            },
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            }
        }

        let wget = wgetify(Im.fromJS(req))

        expect(wget).toEqual(null)
    })

    it("prints a wget statement", function() {
      var req = {
        url: "http://swaggerhub.com/v1/one?name=john|smith",
        method: "GET"
      }

      let wget = wgetify(Im.fromJS(req))

      expect(wget).toEqual("wget \"http://swaggerhub.com/v1/one?name=john|smith\"")
    })

    it("prints a wget statement with an array of query params and auth", function() {
      var req = {
        url: "http://swaggerhub.com/v1/one?name=john|smith",
        method: "GET",
        headers: {
          authorization: "Basic Zm9vOmJhcg=="
        }
      }

      let wget = wgetify(Im.fromJS(req))

      expect(wget).toEqual("wget --header  \"authorization: Basic Zm9vOmJhcg==\" \"http://swaggerhub.com/v1/one?name=john|smith\"")
    })
})
